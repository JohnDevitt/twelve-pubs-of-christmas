import React from "react";
import { Input, Form, Modal, DatePicker, TimePicker } from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";
import StyledButton from "../Button";

import { Title, Label } from "../Typography";

const SetupForm = ({ visible, setFormData }) => {
  const [form] = useForm();

  const saveData = (formData) => {
    const crawlTimeAndDate = moment(
      `${formData.date.format("YYYY-MM-DD")} ${formData.time.format(
        "HH:mm:ss"
      )}`
    ).toISOString();
    setFormData({ title: formData.title, crawlTimeAndDate });
  };

  return (
    <Modal
      visible={visible}
      closable={false}
      onOk={form.submit}
      title={<Title>Tell me about your pub crawl</Title>}
      width={720}
      footer={null}
    >
      <Form
        form={form}
        onFinish={saveData}
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        labelAlign="left"
      >
        <Form.Item
          name="title"
          label={<Label>Give your pubcrawl catchy title</Label>}
          required
        >
          <Input placeholder="Guinness & gastro" size="large" />
        </Form.Item>

        <Form.Item
          name="date"
          label={<Label>What day do we book off work?</Label>}
          required
        >
          <DatePicker size="large" />
        </Form.Item>

        <Form.Item
          name="time"
          label={<Label>When do the festivities begin?</Label>}
          required
        >
          <TimePicker format="h:mm" size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 19 }}>
          <StyledButton type="primary" htmlType="submit">
            Let's gooo
          </StyledButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SetupForm;
