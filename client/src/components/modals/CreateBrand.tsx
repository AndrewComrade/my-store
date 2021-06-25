import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@material-ui/core';

interface BrandModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (brand: string) => void;
}

const BrandModal: React.FC<BrandModalProps> = ({
    isOpen,
    onClose,
    onCreate,
}) => {
    const [value, setValue] = useState<string>('');

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = () => {
        onCreate(value);
        onClose();
    };

    return (
        <Dialog open={isOpen}>
            <DialogTitle>New brand</DialogTitle>
            <DialogContent>
                <DialogContentText>Adding a new device brand</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Brand"
                    fullWidth
                    value={value}
                    onChange={onInputChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onSubmit} color="primary">
                    Create brand
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default BrandModal;
