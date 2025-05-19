import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import { useRef } from "react";

const meta: Meta<typeof Modal> = {
  title: "Overlays/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

const ModalController = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const openModal = () => ref.current?.showModal();
  const closeModal = () => ref.current?.close();

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal ref={ref} title="Upload image(s)">
        <p>Modal content.</p>
        <Button
          variant="contained"
          color="confirm"
          fullWidth
          className="mt-4"
          onClick={closeModal}
        >
          Apply something by clicking
        </Button>
      </Modal>
    </>
  );
};

type Story = StoryObj<typeof meta>;

export const CommonModal: Story = {
  render: () => <ModalController />,
};
