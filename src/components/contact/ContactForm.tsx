import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { Form, Input, Select, Button, message } from 'antd';
import { SendOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function ContactForm() {
  const { t } = useTranslation('contact');
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const onFinish = () => {
    message.success(t('form.success_title'));
    setSubmitted(true);
    form.resetFields();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass-card p-8 text-center"
      >
        <CheckCircleOutlined className="mb-4 text-4xl text-primary-500" />
        <h3 className="mb-2 font-heading text-xl font-semibold text-text-primary">
          {t('form.success_title')}
        </h3>
        <p className="mb-6 text-text-secondary">{t('form.success_message')}</p>
        <Button type="default" onClick={() => setSubmitted(false)} className="border-white/15">
          {t('form.submit')}
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8"
    >
      <h2 className="mb-1 font-heading text-xl font-semibold text-text-primary">
        {t('form.title')}
      </h2>
      <p className="mb-6 text-sm text-text-tertiary">{t('form.subtitle')}</p>

      <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
        <div className="grid gap-x-4 sm:grid-cols-2">
          <Form.Item
            name="name"
            label={<span className="text-sm text-text-secondary">{t('form.name')}</span>}
            rules={[{ required: true, message: t('form.required') }]}
          >
            <Input placeholder={t('form.name_placeholder')} size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-sm text-text-secondary">{t('form.email')}</span>}
            rules={[
              { required: true, message: t('form.required') },
              { type: 'email', message: t('form.required') },
            ]}
          >
            <Input placeholder={t('form.email_placeholder')} size="large" />
          </Form.Item>
          <Form.Item
            name="phone"
            label={<span className="text-sm text-text-secondary">{t('form.phone')}</span>}
            rules={[{ required: true, message: t('form.required') }]}
          >
            <Input placeholder={t('form.phone_placeholder')} size="large" />
          </Form.Item>
          <Form.Item
            name="company"
            label={<span className="text-sm text-text-secondary">{t('form.company')}</span>}
          >
            <Input placeholder={t('form.company_placeholder')} size="large" />
          </Form.Item>
        </div>
        <Form.Item
          name="interest"
          label={<span className="text-sm text-text-secondary">{t('form.interest')}</span>}
        >
          <Select placeholder={t('form.interest_placeholder')} size="large">
            <Select.Option value="rbf">{t('form.interest_rbf')}</Select.Option>
            <Select.Option value="rbh">{t('form.interest_rbh')}</Select.Option>
            <Select.Option value="office">{t('form.interest_office')}</Select.Option>
            <Select.Option value="other">{t('form.interest_other')}</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="message"
          label={<span className="text-sm text-text-secondary">{t('form.message')}</span>}
        >
          <TextArea rows={4} placeholder={t('form.message_placeholder')} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            icon={<SendOutlined />}
            className="gradient-primary glow-orange w-full border-0 font-semibold"
          >
            {t('form.submit')}
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
}
