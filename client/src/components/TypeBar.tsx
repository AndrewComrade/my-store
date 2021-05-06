import React from 'react';
import { List, ListItem, styled, Typography } from '@material-ui/core';
import { IOption } from '~/types/brands';

interface TypeBarProps {
    types: IOption[];
    selectedType: IOption | null;
    onTypeClick: (type: IOption | null) => void;
}

const TypeList = styled(List)({});

const TypeListItem = styled(ListItem)({});

const TypeBar: React.FC<TypeBarProps> = ({
    types,
    onTypeClick,
    selectedType,
}) => {
    return (
        <TypeList>
            <TypeListItem
                button
                selected={!selectedType}
                onClick={() => onTypeClick(null)}
            >
                <Typography>All Types</Typography>
            </TypeListItem>
            {types.map((type: IOption) => (
                <TypeListItem
                    button
                    key={type.name}
                    selected={!!selectedType && selectedType.id === type.id}
                    onClick={() => onTypeClick(type)}
                >
                    <Typography>{type.name}</Typography>
                </TypeListItem>
            ))}
        </TypeList>
    );
};

export default TypeBar;
