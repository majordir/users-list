import React from "react";
import { Table } from "antd";
import { UsersMock } from "../../mocks/users";

function Users() {
  //TODO: объединить пользователей из мока и firebase
  const dataSource = UsersMock;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, item) => {
        const { firstName, lastName, id } = item;

        return (
          <a href={`/users/user/?id=${id}`}>
            {firstName} {lastName}
          </a>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];
  const preparedDataSource = dataSource.map((user, key) => {
    const { email, firstName, lastName, role, phone, id, uid } = user;
    //const phone = formatPhone(user.phone);

    return {
      key,
      id: id || uid,
      email,
      firstName,
      lastName,
      phone,
      role,
    };
  });

  return (
    <div>
      <Table dataSource={preparedDataSource} columns={columns} />
    </div>
  );
}

export default Users;
