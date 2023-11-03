import { Inter } from "next/font/google";

import { Form, Input, Button, ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <ConfigProvider
        prefixCls="coco"
        iconPrefixCls="coco-icon"
        theme={{
          // ref: https://ant.design/theme-editor-cn
          token: {
            fontSize: 16,
            // modal 为 1000
            // header 为 900
            // 常规弹出内容基于 800 增加
            // 尽量减少 antd 相关组件的使用或者使用平替方案
            zIndexPopupBase: 1000,
            controlInteractiveSize: 20,
            colorBgMask: "rgba(55,83,117,0.9)",
            // 设计提供
            colorTextBase: "#375375",
            colorPrimary: "#3a7eff",
            colorInfo: "#3a7eff",
            borderRadius: 4,
            borderRadiusXS: 2,
            borderRadiusLG: 4,
            colorBorder: "#DEE8F9",
            colorBorderSecondary: "#DEE8F9",
            colorBgLayout: "#f7faff",
            colorText: "#3a7eff",
            colorLinkHover: "#275fd9",
          },
          components: {
            Result: {
              fontSize: 14,
              // "iconFontSize": 48,
              // "titleFontSize": 18
            },
            Button: {
              marginXS: 4,
              colorPrimaryHover: "rgb(35, 97, 249)",
              controlHeightLG: 38,
              fontSizeLG: 14,
            },
            Progress: {
              // "circleTextFontSize": "1.2em"
            },
            Tabs: {
              colorBorderSecondary: "rgb(222, 232, 249)",
              colorFillAlter: "rgba(58, 126, 255, 0.02)",
            },
            Tree: {
              colorBgContainerDisabled: "rgba(58, 126, 255, 0.04)",
              colorBorder: "rgba(55, 83, 117, 0.2)",
              controlItemBgHover: "rgba(58, 126, 255, 0.04)",
            },
            Segmented: {
              colorBgLayout: "rgba(58, 126, 255, 0.12)",
              colorText: "rgb(58, 126, 255)",
            },
            Card: {
              padding: 12,
              paddingLG: 12,
            },
            Upload: {
              paddingSM: 0,
              fontSizeHeading3: 16,
            },
            TreeSelect: {
              controlItemBgHover: "rgba(58, 126, 255, 0.04)",
            },
            Transfer: {
              controlItemBgHover: "rgba(58, 126, 255, 0.04)",
            },
            Select: {
              // "multipleItemBg": "rgb(230, 244, 255)",
              // "optionActiveBg": "rgba(58, 126, 255, 0.04)"
            },
            Rate: {
              colorFillContent: "rgba(58, 126, 255, 0.1)",
            },
            Mentions: {
              controlItemBgHover: "rgba(58, 126, 255, 0.04)",
            },
            Checkbox: {
              colorBorder: "rgba(55, 83, 117, 0.2)",
            },
            Cascader: {
              controlItemBgHover: "rgba(58, 126, 255, 0.04)",
            },
            Pagination: {
              colorBgTextHover: "rgba(58, 126, 255, 0.04)",
            },
            Menu: {
              colorFillAlter: "rgba(55, 83, 117, 0)",
              colorBgTextHover: "rgba(58, 126, 255, 0.04)",
              // "iconMarginInlineEnd": 8,
              // "itemMarginBlock": 0
            },
            Dropdown: {
              controlItemBgHover: "rgba(58, 126, 255, 0.04)",
            },
            Breadcrumb: {
              // "lastItemColor": "rgba(55, 83, 117, 0.45)",
              // "itemColor": "rgb(55, 83, 117)",
              // "linkColor": "rgb(55, 83, 117)",
              // "linkHoverColor": "rgb(55, 83, 117)",
              colorBgTextHover: "rgba(58, 126, 255, 0.04)",
            },
            DatePicker: {
              // "cellHoverBg": "rgba(58, 126, 255, 0.04)"
            },
            Modal: {
              borderRadiusLG: 8,
              borderRadiusSM: 8,
            },
          },
        }}
      >
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
      </ConfigProvider>
    </main>
  );
}
