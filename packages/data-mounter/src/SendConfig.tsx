import React from 'react';
import { Button } from '@material-ui/core';
import {
    // name,
    // accessKeyId,
    // secretKey,
    // endpointS3API,
    selectedRegionIndex,
    selectedLocationIndex,
    selectedEnvVarIndex,
    selectedEncryptionIndex,
    selectedACLIndex,
    selectedKMSIndex,
    selectedStorageClassIndex,
    selectedNewRemoteOptionIndex
} from './DataMounterPanel';

import { requestAPI } from './requests';

interface DataSenderProps {
    // name: string;
    // accessKeyId: string;
    // secretKey: string;
    // endpointS3API: string;
    selectedRegionIndex: number;
    selectedLocationIndex: number;
    selectedEnvVarIndex: number;
    selectedEncryptionIndex: number;
    selectedACLIndex: number;
    selectedKMSIndex: number;
    selectedStorageClassIndex: number;
    selectedNewRemoteOptionIndex: number;
}

export default function SendData({}: DataSenderProps) {
    // name,
    // accessKeyId,
    // secretKey,
    // endpointS3API,
    selectedRegionIndex;
    selectedLocationIndex;
    selectedEnvVarIndex;
    selectedEncryptionIndex;
    selectedACLIndex;
    selectedKMSIndex;
    selectedStorageClassIndex;
    selectedNewRemoteOptionIndex;

    const sendData = async () => {
        try {
            // console.log('Name: ', name);
            // console.log('Access Key ID: ', accessKeyId);
            // console.log('Secret Key ID: ', secretKey);
            // console.log('Endpoint S3 API: ', endpointS3API);
            console.log('Regions: ', selectedRegionIndex);
            console.log('Location: ', selectedLocationIndex);
            console.log('Environment Var: ', selectedEnvVarIndex);
            console.log('Encryption: ', selectedEncryptionIndex);
            console.log('ACL: ', selectedACLIndex);
            console.log('KMS: ', selectedKMSIndex);
            console.log('Storage Class: ', selectedStorageClassIndex);
            console.log('Secret Key: ', selectedNewRemoteOptionIndex);

            const resp = await requestAPI<any>('createRemote', {
                body: JSON.stringify({
                    // name: name,
                    // access_key_id: accessKeyId,
                    // secret_key_id: secretKey,
                    // endpoint_s3_api: endpointS3API,
                    regions: selectedRegionIndex,
                    location: selectedLocationIndex,
                    environment_var: selectedEnvVarIndex,
                    encryption: selectedEncryptionIndex,
                    acl: selectedACLIndex,
                    kms: selectedKMSIndex,
                    storage_class: selectedStorageClassIndex,
                    secret_key: selectedNewRemoteOptionIndex
                }),
                method: 'POST'
            });

            console.log('Response: ', resp);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Button onClick={sendData}>Save</Button>
        </>
    );
}
