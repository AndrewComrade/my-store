import React, { useEffect } from 'react';
import { Grid, styled, Typography, GridProps } from '@material-ui/core';
import TypeBar from '~/components/TypeBar';
import BrandBar from '~/components/BrandBar';
import DevicesList from '~/components/DevicesList';
import { IOption } from '~/types/devices';
import { useActions } from '~/hooks/useActions';
import { useSelector } from '~/hooks/useTypedSelector';

const ShopPageWrapper = styled((props: GridProps) => <Grid {...props} />)({
    paddingTop: 50,
});

const ShopPage: React.FC = () => {
    const { setSelectedBrand, setSelectedType, fetchDevices } = useActions();
    const { selectedBrand, selectedType, brands, types, devices } = useSelector(
        (state) => state.devices
    );

    useEffect(() => {
        fetchDevices(selectedType?.id, selectedBrand?.id);
    }, [selectedBrand, selectedType]);

    const onTypeClick = (type: IOption | null) => {
        setSelectedType(type);
    };

    const onBrandClick = (brand: IOption | null) => {
        setSelectedBrand(brand);
    };

    return (
        <ShopPageWrapper container spacing={4}>
            <Grid item container alignContent="flex-start" xs={3}>
                <Grid item xs={12}>
                    <Typography variant="h6">TYPES:</Typography>
                    <TypeBar
                        types={types}
                        selectedType={selectedType}
                        onTypeClick={onTypeClick}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6">BRANDS:</Typography>
                    <BrandBar
                        brands={brands}
                        selectedBrand={selectedBrand}
                        onBrandClick={onBrandClick}
                    />
                </Grid>
            </Grid>
            <Grid item xs={9}>
                <DevicesList devices={devices} />
            </Grid>
        </ShopPageWrapper>
    );
};

export default ShopPage;
