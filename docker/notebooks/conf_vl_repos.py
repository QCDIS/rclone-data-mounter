import logging

from jupyterlab_vre.storage.catalog import Catalog
from jupyterlab_vre.repository.repository_credentials import RepositoryCredentials
import argparse

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

arg_parser = argparse.ArgumentParser()

arg_parser.add_argument('--force', action='store', type=bool, required='True', dest='force')
arg_parser.add_argument('--github_url', action='store', type=str, required='True', dest='github_url')
arg_parser.add_argument('--github_token', action='store', type=str, required='True', dest='github_token')

arg_parser.add_argument('--registry_url', action='store', type=str, required='True', dest='registry_url')
# arg_parser.add_argument('--registry_token', action='store', type=str, required='True', dest='registry_token')

args = arg_parser.parse_args()

force = args.force
github_url = args.github_url
github_token = args.github_token

registry_url = args.registry_url
# registry_token = args.registry_token


def add_gh_credentials(force_replace=None, repository_credentials=None):
    if force_replace:
        Catalog.delete_all_gh_credentials()
        Catalog.add_gh_credentials(repository_credentials)
    else:
        gh_credentials = Catalog.get_gh_credentials()
        if not gh_credentials:
            Catalog.add_gh_credentials(repository_credentials)


def add_registry_credentials(force_replace, registry_credentials):
    if force_replace:
        Catalog.delete_all_registry_credentials()
        Catalog.add_registry_credentials(registry_credentials)
    else:
        registry_credentials = Catalog.get_gh_credentials()
        if not registry_credentials:
            Catalog.add_registry_credentials(registry_credentials)


if __name__ == '__main__':
    input_repository_credentials = RepositoryCredentials(url=github_url, token=github_token)
    add_gh_credentials(force_replace=force, repository_credentials=input_repository_credentials)

    input_registry_credentials = RepositoryCredentials(url=registry_url, token=None)
    add_registry_credentials(force_replace=force, registry_credentials=input_registry_credentials)