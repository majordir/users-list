export function formatPhone(value) {
  const cleaned = ("" + value).replace(/\D/g, "");
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    let intlCode = match[1] ? "+7 " : "";
    return [intlCode, "(" + match[1] + ") " + match[2] + "-" + match[3]].join(
      ""
    );
  }

  return null;
}
