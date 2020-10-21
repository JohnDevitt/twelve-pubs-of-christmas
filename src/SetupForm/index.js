import React from "react";
import { Input, Form, Modal, DatePicker, TimePicker, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";

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
      title="Tell me about your pub crawl"
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
          label="Give your pubcrawl catchy title"
          required
        >
          <Input placeholder="Guinness & gastro" size="large" />
        </Form.Item>

        <Form.Item name="date" label="What day do we book off work?" required>
          <DatePicker size="large" />
        </Form.Item>

        <Form.Item name="time" label="When do the festivities begin?" required>
          <TimePicker format="h:mm" size="large" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 20 }}>
          <Button type="primary" htmlType="submit">
            Let's gooo
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SetupForm;
