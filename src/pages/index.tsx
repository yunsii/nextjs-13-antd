import { Inter } from "next/font/google";

import { Form, Input, Button } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Form>
        <Form.Item name="name">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
