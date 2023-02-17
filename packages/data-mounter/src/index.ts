import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import DataMounterWidget from './DataMounterWidget';
export default [DataMounterWidget] as JupyterFrontEndPlugin<any>[];
