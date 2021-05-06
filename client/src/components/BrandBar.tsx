import React from 'react';
import { List, ListItem, styled, Typography } from '@material-ui/core';
import { IOption } from '~/types/brands';

interface BrandBarProps {
    brands: IOption[];
    selectedBrand: IOption | null;
    onBrandClick: (brand: IOption | null) => void;
}

const BrandList = styled(List)({});

const BrandListItem = styled(ListItem)({});

const BrandBar: React.FC<BrandBarProps> = ({
    brands,
    selectedBrand,
    onBrandClick,
}) => {
    return (
        <BrandList>
            <BrandListItem
                button
                selected={!selectedBrand}
                onClick={() => onBrandClick(null)}
            >
                <Typography>All Brands</Typography>
            </BrandListItem>
            {brands.map((brand: IOption) => (
                <BrandListItem
                    button
                    key={brand.name}
                    selected={!!selectedBrand && selectedBrand.id === brand.id}
                    onClick={() => onBrandClick(brand)}
                >
                    <Typography>{brand.name}</Typography>
                </BrandListItem>
            ))}
        </BrandList>
    );
};

export default BrandBar;
