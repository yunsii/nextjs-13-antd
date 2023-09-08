import { useRouter } from "next/router";
import { useState } from "react";
import { msg } from "@lingui/macro";
import { MessageDescriptor } from "@lingui/core";
import { useLingui } from "@lingui/react";
import { Select } from "antd";

const languages: { [key: string]: MessageDescriptor } = {
  en: msg`English`,
  fr: msg`French`,
  zh: msg`Chinese`,
};

export function Switcher() {
  const router = useRouter();
  const { _ } = useLingui();

  const [locale, setLocale] = useState(router.locale || "en");

  // disabled for DEMO - so we can demonstrate the 'pseudo' locale functionality
  // if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
  //   languages['pseudo'] = t`Pseudo`
  // }

  function handleChange(locale: string) {
    setLocale(locale);
    router.push(router.pathname, router.pathname, { locale });
  }

  return (
    <Select
      value={locale}
      style={{
        minWidth: 100,
      }}
      onChange={handleChange}
      options={Object.keys(languages).map((locale) => {
        return {
          value: locale,
          label: _(languages[locale]),
        };
      })}
    />
  );
}
