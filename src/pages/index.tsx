import { Inter } from "next/font/google";
import { Trans } from "@lingui/macro";

import { Form, Input, Button, ConfigProvider } from "antd";
import { Switcher } from "@/components/Switcher";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <ConfigProvider
        prefixCls="ys"
        theme={{
          token: {
            colorPrimary: "#14b8a6",
          },
        }}
      >
        <Form>
          <Form.Item name="name">
            <Input placeholder="╮(╯_╰)╭" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" block type="primary">
              <Trans>Submit</Trans>
            </Button>
          </Form.Item>
        </Form>
        <Switcher />
      </ConfigProvider>
    </main>
  );
}
