import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";




export default function TransactionForm({ onClose, isOpen }) {


    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext)

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleFormSubmit(formData)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>add new transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>
                                ENter description
                            </FormLabel>
                            <Input
                                placeholder="enter transaction description"
                                name="description"
                                type="text"
                                onChange={handleFormChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                ENter amount
                            </FormLabel>
                            <Input
                                placeholder="enter transaction amount"
                                name="amount"
                                type="number"
                                onChange={handleFormChange} />
                        </FormControl>
                        <RadioGroup mt={'5'} value={value} onChange={setValue}>
                            <Radio
                                checked={formData.type === 'income'}
                                value="income" colorScheme="blue" name="type"
                                onChange={handleFormChange}
                            >income</Radio>
                            <Radio
                                checked={formData.type === 'expense'}
                                value="expense" colorScheme="red" name="type"
                                onChange={handleFormChange}
                            >expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose} >cancel</Button>
                        <Button onClick={onClose} type="submit">add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    )
}
