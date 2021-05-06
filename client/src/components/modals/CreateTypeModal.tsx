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

interface CreateTypeModalProps {
    isOpen: boolean;
    handleClose: () => void;
    handleSubmit: (value: string) => void;
}

const CreateTypeModal: React.FC<CreateTypeModalProps> = ({
    isOpen,
    handleClose,
    handleSubmit,
}) => {
    const [value, setValue] = useState<string>('');
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
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
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => handleSubmit(value)} color="primary">
                    Create type
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTypeModal;
