import {Dialog, Transition} from '@headlessui/react'
import {Fragment} from 'react'


const MyModal = ({value, closeModal, data}) => {

    return (
        <>
            <Transition appear show={value} as={Fragment}>
                <Dialog as="div" className="position-relative 2000" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="position-fixed inset-0 bg-black bg-opacity-50"/>
                    </Transition.Child>

                    <div className="position-fixed inset-0 overflow-y-auto">
                        <div className="d-flex justify-content-center align-items-center p-4 h-100 text-center">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <Dialog.Panel
                                    className="text-left bg-white p-3 align-middle shadow-xl rounded-4 overflow-hidden transform w-modal transition-all">
                                    <Dialog.Title as="h3" className="position-fixed align-items-center justify-content-between pl-6 text-lg text-start font-medium leading-6">
                                        <div>Post Detail</div>
                                    </Dialog.Title>
                                    <hr className="hr-style"/>
                                    <div className="mt-2 d-flex flex-column text-start">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="title" className="form-control" id="title" placeholder="title" defaultValue={data && data.title} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="body" className="form-label">Body</label>
                                            <textarea className="form-control" id="body" rows="3" defaultValue={data && data.body}></textarea>
                                        </div>
                                    </div>

                                    <div className="mt-4 d-flex justify-content-center">
                                        <button type="button"
                                                className="rounded-md border border-transparent bg-primary text-white px-4 py-2 text-sm font-medium text-blue-900"
                                                onClick={closeModal}>Save
                                        </button>
                                        <button type="button"
                                                className="rounded-md border border-transparent bg-danger text-white px-4 py-2 text-sm font-medium text-blue-900"
                                                onClick={closeModal}>Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
)
}


export default MyModal;