const hasError = (data, page) => {
  const Errors = {};
  if (page === "signUp") {
    if (!data.name) {
      Errors.name = "نام خود را وارد کنید";
    }

    if (!data.email) {
      Errors.email = "ایمیل خود را وارد کنید";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      Errors.email = "ایمیل نامعتبر هست";
    }

    if (!data.password) {
      Errors.password = "رمز عبور خود را وارد کنید";
    } else if (data.password.length < 8) {
      Errors.password = "رمز عبور باید بیشتر از 8 کاراکتر باشد";
    }

    if (!data.confirmPassword) {
      Errors.confirmPassword = "رمز عبور خود را مجدد وارد کنید";
    } else if (data.confirmPassword !== data.password) {
      Errors.confirmPassword = "رمز عبور مطابقت ندارد";
    }
    return Errors;
  } else if (page === "signIn") {
    if (!data.email) {
      Errors.email = "ایمیل خود را وارد کنید";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      Errors.email = "ایمیل نامعتبر هست";
    }

    if (!data.password) {
      Errors.password = "رمز عبور خود را وارد کنید";
    } else if (data.password.length < 8) {
      Errors.password = "رمز عبور باید بیشتر از 8 کاراکتر باشد";
    }
    return Errors;
  }
};

export default hasError;
