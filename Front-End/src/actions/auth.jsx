"use server";

import { cookies } from "next/headers";

function handleError(message) {
  const errors = [];
  Object.keys(message).map((key) => {
    message[key].map((err) => {
      errors.push(err);
    });
  });

  return errors.join();
}

async function register(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("ConfirmPassword");

  if ((email === "") | (name === "") | (password === "")) {
    return {
      error: "name , email and password is required",
    };
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords dont match!",
    };
  }

  const res = await fetch("http://127.0.0.1:8000/api/register", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      c_password: confirmPassword,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    return {
      success: "You are registered",
    };
  } else {
    return {
      error: handleError(data),
    };
  }
}

async function login(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if ((email === "") | (password === "")) {
    return {
      error: "email and password is required",
    };
  }

  const res = await fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    const cookiesStore = await cookies();
    cookiesStore.set({
      name: "token",
      value: data.token,
      httpOnly: true,
    });

    return {
      success: "You are logged in",
      user: data.user,
    };
  } else {
    return {
      error: handleError(data),
    };
  }
}

async function me() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) {
    return {
      error: "Not Authorized",
    };
  }
  const res = await fetch("http://localhost:8000/api/me", {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "Accept" : "application/json"
    },
  });
  const data = await res.json();
  if (res.ok) {
    return {
      user: data.user,
    };
  } else {
    error: "User Forbiden";
  }
}

async function logout() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");

  const res = await fetch("http://localhost:8000/api/logout", {
    method: "POST",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  const data = await res.json();
  if (res.ok) {
    cookiesStore.delete("token");
    return {
      success: "You are logged out",
    };
  } else {
    error: handleError(data);
  }
}

export { register, login, me , logout };
