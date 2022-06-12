import React from "react";
import { GetServerSideProps } from "next";
import { getAllUser } from "../../lib/api/getAllUser";
import useResponsive from "../../utils/useResponsive";
import styles from './admin.module.scss';

const Admin = (props: any) => {
  const { allUser } = props;

  const { isDesktop } = useResponsive();

  return (

    <div className={styles.admin}>
      <div className={isDesktop ? "container" : ""}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Email</th>
              <th>Last Submission</th>
            </tr>

            {allUser && allUser.map((user: any) => {
              return (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.level}</td>
                  <td>{user.email}</td>
                  <td>{user.last_submitted}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allUser = await getAllUser();

  return {
    props: {
      allUser: allUser ?? [],
    },
  };
};

export default Admin;