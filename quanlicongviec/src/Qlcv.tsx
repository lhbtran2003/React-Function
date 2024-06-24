import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./qlcv.css";
import { data as initData } from "./data";

type Func = (stu:Object,index:undefined | number) => Object

export const Qlcv = () => {
  const [data, setData] = useState(initData);
  const [id, setId] = useState(0)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenBlockModal, setIsOpenBlockModal] = useState(false);// đang đóng

  const toggleEmployeeStatus = () => {
      const newData = data.map(stu => {
         if(stu.id == id) {
          stu.status = !stu.status; 
         }
         return stu;
      })
      console.log("t nhấn rồi");
      setData(newData)
      setIsOpenBlockModal(false)
  }
  const toggleBlockModal = () => {
    setIsOpenBlockModal(!isOpenBlockModal)
  }
  const toggleDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal)
  }

  const handleDeleteEmpoyee = () => {
      const newData = data.filter((stu) => stu.id != id) // cái này là return về đúng sai nha bà nội
      setData(newData)
      setIsOpenDeleteModal(false)
  }
  
  const map = (oldArray: Array<Object>, callBackFunc: Func ) => {
    const newArray = [];
    for (let i = 0; i < oldArray.length; i++) {
      const element = oldArray[i];
      let item = callBackFunc(element,i);
      newArray.push(item)
    }
    return newArray
  }

  let stuEdit = data.find((stu,index) => stu.id == id)
  return (
    <>
      <div className="w-[80%] m-auto mt-4 h-[100vh]">
        <main className="main">
          <header className="d-flex justify-content-between mb-3">
            <h3>Nhân viên</h3>
            <button className="btn btn-primary">Thêm mới nhân viên</button>
          </header>
          <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
            <input
              style={{ width: 350 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm theo email"
            />
            <i className="fa-solid fa-arrows-rotate" title="Refresh" />
          </div>
          {/* Danh sách nhân viên */}
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th colSpan={2}>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {data.map((stu, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{stu.name}</td>
                  <td>{stu.dateOfBirth}</td>
                  <td>{stu.email}</td>
                  <td>{stu.address}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <div
                        className={`status status-${
                          stu.status ? "active" : "stop"
                        }`}
                      />
                      <span>
                        {stu.status ? "Đang hoạt động" : "Ngừng hoạt động"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span
                      onClick={() => {
                        toggleBlockModal();
                        setId(stu.id);
                      }}
                      className={`button button-${
                        stu.status ? "block" : "unblock"
                      }`}
                    >
                      {stu.status ? "Chặn" : "Bỏ chặn"}
                    </span>
                  </td>
                  <td>
                    <span className="button button-edit">Sửa</span>
                  </td>
                  <td>
                    <span
                      onClick={() => {
                        toggleDeleteModal()
                        setId(stu.id)
                      }}
                      className="button button-delete"
                    >
                      Xóa
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className="d-flex justify-content-end align-items-center gap-3">
            <select className="form-select" defaultValue="10">
              <option value="10">Hiển thị 10 bản ghi trên trang</option>
              <option value="20">Hiển thị 20 bản ghi trên trang</option>
              <option value="50">Hiển thị 50 bản ghi trên trang</option>
              <option value="100">Hiển thị 100 bản ghi trên trang</option>
            </select>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
      {/* Form thêm mới nhân viên */}
      <div className="overlay" hidden>
        <form className="form">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Chỉnh sửa nhân viên</h4>
            <i className="fa-solid fa-xmark" />
          </div>
          <div>
            <label className="form-label" htmlFor="userName">
              Họ và tên
            </label>
            <input id="userName" type="email" className="form-control" />
            {/* <div class="form-text error">Họ và tên không được để trống.</div> */}
          </div>
          <div>
            <label className="form-label" htmlFor="dateOfBirth">
              Ngày sinh
            </label>
            <input id="dateOfBirth" type="date" className="form-control" />
          </div>
          {/* <div class="form-text error">
    Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input id="email" type="text" className="form-control" />
          </div>
          {/* <div class="form-text error">Email không được để trống.</div> */}
          <div>
            <label className="form-label" htmlFor="address">
              Địa chỉ
            </label>
            <textarea
              className="form-control"
              id="address"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div>
            <button className="w-100 btn btn-primary">Thêm mới</button>
          </div>
        </form>
      </div>
      {/* Modal xác nhận chặn tài khoản */}
      <div className="overlay" hidden={!isOpenBlockModal}>
        <div className="modal-custom">
          <div className="modal-title">
            <h4>Cảnh báo</h4>
            <i className="fa-solid fa-xmark" onClick={toggleBlockModal} />
          </div>
          <div className="modal-body-custom">
            <span>{`Bạn có chắc chắn muốn ${stuEdit?.status ? "chặn":"mở chặn"} tài khoản này?`}</span>
          </div>
          <div className="modal-footer-custom">
            <button className="btn btn-light" onClick={toggleBlockModal}>
              Hủy
            </button>
            <button className="btn btn-danger" onClick={toggleEmployeeStatus}>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
      {/* Modal xác nhận xóa tài khoản */}
      <div className="overlay" hidden={!isOpenDeleteModal}>
        <div className="modal-custom">
          <div className="modal-title">
            <h4>Cảnh báo</h4>
            <i className="fa-solid fa-xmark" />
          </div>
          <div className="modal-body-custom">
            <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
          </div>
          <div className="modal-footer-custom">
            <button className="btn btn-light">Hủy</button>
            <button className="btn btn-danger">Xác nhận</button>
          </div>
        </div>
      </div>
    </>
  );
};
