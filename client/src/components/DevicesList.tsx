import React from 'react';
import { IDevice } from '~/types/devices';
import { Grid } from '@material-ui/core';
import DeviceItem from '~/components/DeviceItem';

interface DevicesListProps {
    devices: IDevice[];
}

const DevicesList: React.FC<DevicesListProps> = ({ devices }) => {
    return (
        <Grid container spacing={2} justify="flex-start">
            {devices.map((device: IDevice) => (
                <Grid key={device.id} item xs={4}>
                    <DeviceItem device={device} />
                </Grid>
            ))}
        </Grid>
    );
};

export default DevicesList;
