"use client";

import React, { useState } from 'react';
import { Modal, Button, Checkbox, Label, TextInput } from "flowbite-react";

const SSMModal = ({ openModalOrder, closeModalOrder, packagetypes }) => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    function modalClose() {
        closeModalOrder(false)
        setFirstName('')
        setLastName('')
        setAddress('')
        setEmail('')

    }

   

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <Modal show={openModalOrder} onClose={modalClose} >
                <Modal.Header className='text-center'>
                    Fill Out the Form
                </Modal.Header>
                <Modal.Body >
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="firstname" value="First Name" />
                                </div>
                                <TextInput
                                    id="firstname"
                                    value={firstname}
                                    onChange={(event) => setFirstName(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="lastname" value="Last Name" />
                                </div>
                                <TextInput
                                    id="lastname"
                                    value={lastname}
                                    onChange={(event) => setLastName(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Email" />
                                </div>
                                <TextInput
                                    id="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="address" value="Address" />
                                </div>
                                <TextInput
                                    id="address"
                                    value={address}
                                    onChange={(event) => setAddress(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="package" value="Package" />
                                </div>
                                <TextInput
                                    id="package"
                                    defaultValue={packagetypes}
                                    readOnly
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <Button type='submit'>Submit</Button>
                            </div>
                        </div>

                    </form>
                </Modal.Body>


            </Modal>
        </div>
    );
};

export default SSMModal;
