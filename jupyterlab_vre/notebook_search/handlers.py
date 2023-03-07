import os
import logging
import configobj
import requests
from notebook.base.handlers import APIHandler
from tornado import web
from subprocess import Popen, PIPE

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


################################################################################

# RCLONINATOR

################################################################################

class NotebookSearchHandler(APIHandler):

    @web.authenticated
    async def post(self, *args, **kwargs):
        payload = self.get_json_body()
        
        # Convert JSON to ConfigObj object
        config = configobj.ConfigObj(payload)

        # Convert ConfigObj object to INI string
        ini_str = config.write()
        
        # Get path to rclone.conf file
        home_dir = os.path.expanduser("~")
        rclone_conf_path = os.path.join(home_dir, ".config", "rclone", "rclone.conf")

        # TEST: Check if rclone.conf file already exists
        if os.path.exists(rclone_conf_path):
            logger.warning("rclone.conf file already exists, overwriting...")

        # TEST: Check if home directory is valid
        if not os.path.isdir(home_dir):
            logger.error(f"{home_dir} is not a valid home directory.")
            self.set_status(500)
            self.finish("Internal Server Error")
            return

        # Save INI string to rclone.conf file
        try:
            with open(rclone_conf_path, "w") as f:
                f.write(ini_str)
                logger.info(f"Successfully wrote to {rclone_conf_path}")
        except Exception as e:
            logger.error(f"Error writing to {rclone_conf_path}: {e}")
            self.set_status(500)
            self.finish("Internal Server Error")
            return

        # Print contents of rclone.conf file
        with open(rclone_conf_path, "r") as f:
            contents = f.read()
            logger.info(f"Contents of {rclone_conf_path}:\n{contents}")

        # TEST: Check if rclone binary is installed and in the system path
        try:
            process = Popen(["which", "rclone"], stdout=PIPE, stderr=PIPE)
            stdout, stderr = process.communicate()
            if process.returncode != 0:
                logger.error(f"rclone binary not found in system path. Please install rclone and try again.")
                self.set_status(500)
                self.finish("Internal Server Error")
                return
        except Exception as e:
            logger.error(f"Error while checking for rclone binary: {e}")
            self.set_status(500)
            self.finish("Internal Server Error")
            return

        # TEST: Run a test rclone command to ensure configuration has been applied
        try:
            process = Popen(["rclone", "listremotes", "--config", rclone_conf_path], stdout=PIPE, stderr=PIPE)
            stdout, stderr = process.communicate()
            if process.returncode != 0:
                logger.error(f"Error running rclone command: {stderr}")
                self.set_status(500)
                self.finish("Internal Server Error")
                return
            else:
                logger.info(f"Successfully ran rclone command: {stdout}")
        except Exception as e:
            logger.error(f"Error while running rclone command: {e}")
            self.set_status(500)
            self.finish("Internal Server Error")
            return

        # Return INI string in response
        self.set_header('Content-Type', 'text/plain')
        self.finish(ini_str)