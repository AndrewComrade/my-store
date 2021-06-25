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

interface TypeModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (type: string) => void;
}

const TypeModal: React.FC<TypeModalProps> = ({ isOpen, onClose, onCreate }) => {
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
            <DialogTitle>New type</DialogTitle>
            <DialogContent>
                <DialogContentText>Adding a new device type</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Type"
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
                    Create type
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TypeModal;
