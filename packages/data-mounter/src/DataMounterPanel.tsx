import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import { Divider, Button } from '@material-ui/core';
import { remotes, options, regions, location, environmentVar, encription, acl, kms, storage_class } from './Pages/RemotesAndOptions';
import CurrentRemotes from './Pages/CurrentRemotes';
import NewRemoteOptions from './Pages/NewRemoteOptions';
import Dropdown from './Pages/Dropdown';
import NameNewRemoteField from './Pages/NameNewRemoteField';
import AccesKeyIdField from './Pages/AccesKeyIdField';
import EndpointS3APIField from './Pages/EndpointS3API';
import SecretKeyField from './Pages/SecretKeyField';
import { requestAPI } from './requests';

interface DataMounterPanelProps {}

const DataMounterPanel: React.FC<DataMounterPanelProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showAccesKeyIdField, setShowAccesKeyIdField] = useState(false);
    const [showSecretKeyField, setShowSecretKeyField] = useState(false);
    const [showNameNewRemoteField, setShowNameNewRemoteField] = useState(false);
    const [showNewRemoteOptions, setShowNewRemoteOptions] = useState(false);
    const [showRegions, setShowRegions] = useState(false);
    const [showEndpointS3APIField, setShowEndpointS3APIField] = useState(false);
    const [showlocation, setShowlocation] = useState(false);
    const [showenvironmentVar, setShowenvironmentVar] = useState(false);
    const [showencription, setShowencription] = useState(false);
    const [showacl, setShowacl] = useState(false);
    const [showkms, setShowkms] = useState(false);
    const [showstorage_class, setShowstorage_class] = useState(false);

    const [remoteName, setRemoteName] = useState('');
    const [access_key_id, setAccessKeyId] = useState('');
    const [SecretKey, setSecretKey] = useState('');
    const [EndpointS3API, setEndpointS3API] = useState('');
    const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
    const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
    const [selectedEnvVarIndex, setSelectedEnvVarIndex] = useState(0);
    const [selectedEncryptionIndex, setSelectedEncryptionIndex] = useState(0);
    const [selectedACLIndex, setSelectedACLIndex] = useState(0);
    const [selectedKMSIndex, setSelectedKMSIndex] = useState(0);
    const [selectedStorageClassIndex, setSelectedStorageClassIndex] = useState(0);
    const [selectedNewRemoteOptionIndex, setSelectedNewRemoteOptionIndex] = useState(0);

    const handleAPIsend = async () => {
    try{
        const resp = await requestAPI<any>('notebooksearch', {
          body: JSON.stringify({
              conf: {[remoteName]: {
                                    type: NewRemoteOptions[selectedNewRemoteOptionIndex],
                                    provider: 'AWS',
                                    access_key_id: access_key_id,
                                    secret_access_key: SecretKey,
                                    EndpointS3API: EndpointS3API,
                                    region: regions[selectedRegionIndex],
                                    location_constraint: location[selectedLocationIndex],
                                    env_auth: environmentVar[selectedEnvVarIndex],
                                    encription: encription[selectedEncryptionIndex],
                                    acl: acl[selectedACLIndex],
                                    kms: kms[selectedKMSIndex],
                                    storage_class: storage_class[selectedStorageClassIndex]
                                            }}
          }),
          method: 'POST'
      });
      console.log('resp: ',resp)
    }catch (error){
        console.log(error);
        alert(String(error).replace('{"message": "Unknown HTTP Error"}', ''));
    }
};

    return (
        <ThemeProvider theme={theme}>
            <div className={'lifewatch-widget'}>
                <div className={'lifewatch-widget-content'}>
                    <div>
                        <p className={'lw-panel-header'}>Rclone configuration</p>
                    </div>
                    <Divider />
                    <div className={'current-remotes-field'}>
                        <CurrentRemotes remotes={remotes} />
                    </div>
                    <Divider />
                    {selectedOption ? (
                        <div>
                            <h2>{selectedOption}</h2>
                            <div>
                                <Button
                                    onClick={() => {
                                        setSelectedOption(null);
                                        setShowAccesKeyIdField(false);
                                        setShowSecretKeyField(false);
                                        setShowRegions(false);
                                        setShowEndpointS3APIField(false);
                                        setShowNameNewRemoteField(false);
                                        setShowNewRemoteOptions(false);
                                        setShowlocation(false);
                                        setShowenvironmentVar(false);
                                        setShowstorage_class(false);
                                        setShowencription(false);
                                        setShowacl(false);
                                        setShowkms(false);
                                    }}
                                >
                                    Back
                                </Button>
                                {NewRemoteOptions[selectedNewRemoteOptionIndex] === 's3' && (
                                    <Button
                                        onClick={() => {
                                            setShowAccesKeyIdField(true);
                                            setShowSecretKeyField(true);
                                            setShowRegions(true);
                                            setShowEndpointS3APIField(true);
                                            setShowlocation(true);
                                            setShowenvironmentVar(true);
                                            setShowencription(true);
                                            setShowacl(true);
                                            setShowkms(true);
                                            setShowstorage_class(true);
                                            setShowNameNewRemoteField(false);
                                            setShowNewRemoteOptions(false);
                                        }}
                                    >
                                        Next
                                    </Button>
                                )}
                                {NewRemoteOptions[selectedNewRemoteOptionIndex] !== 's3' && (
                                    <Button
                                        onClick={() => {
                                            // Handle other options here
                                        }}
                                    >
                                        Next
                                    </Button>
                                )}
                                <Button
                                    onClick={handleAPIsend}
                                >
                                    Submit
                                </Button>
                                {showAccesKeyIdField && <AccesKeyIdField onChange={setAccessKeyId} />}
                                {showSecretKeyField && <SecretKeyField onChange={setSecretKey} />}
                                <Dropdown options={regions} show={showRegions} className={'RegionsMenu'} selectedIndex={selectedRegionIndex} setSelectedIndex={setSelectedRegionIndex} />
                                <Dropdown options={location} show={showlocation} className={'locationMenu'} selectedIndex={selectedLocationIndex} setSelectedIndex={setSelectedLocationIndex} />
                                <Dropdown
                                    options={environmentVar}
                                    show={showenvironmentVar}
                                    className={'environmentVarMenu'}
                                    selectedIndex={selectedEnvVarIndex}
                                    setSelectedIndex={setSelectedEnvVarIndex}
                                />
                                <Dropdown
                                    options={encription}
                                    show={showencription}
                                    className={'encriptionMenu'}
                                    selectedIndex={selectedEncryptionIndex}
                                    setSelectedIndex={setSelectedEncryptionIndex}
                                />
                                <Dropdown options={acl} show={showacl} className={'aclMenu'} selectedIndex={selectedACLIndex} setSelectedIndex={setSelectedACLIndex} />
                                <Dropdown options={kms} show={showkms} className={'kmsMenu'} selectedIndex={selectedKMSIndex} setSelectedIndex={setSelectedKMSIndex} />
                                <Dropdown
                                    options={storage_class}
                                    show={showstorage_class}
                                    className={'storage_classMenu'}
                                    selectedIndex={selectedStorageClassIndex}
                                    setSelectedIndex={setSelectedStorageClassIndex}
                                />
                                <Dropdown
                                    options={NewRemoteOptions}
                                    show={showNewRemoteOptions}
                                    className={'NewRemoteOptionsMenu'}
                                    selectedIndex={selectedNewRemoteOptionIndex}
                                    setSelectedIndex={setSelectedNewRemoteOptionIndex}
                                />
                                {showEndpointS3APIField && <EndpointS3APIField onChange={setEndpointS3API} />}
                                {showNameNewRemoteField && <NameNewRemoteField onChange={setRemoteName} />}
                            </div>
                        </div>
                    ) : (
                        <div className="option-menu-container">
                            {options.map((option, index) => (
                                <Button
                                    key={index}
                                    onClick={() => {
                                        setSelectedOption(option);
                                        setShowNameNewRemoteField(true);
                                        setShowNewRemoteOptions(true);
                                    }}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default DataMounterPanel;
