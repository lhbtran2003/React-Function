import React, { useState, useMemo } from "react";
import { data as initData } from "../data";
import "./style.css";
import { ConeStriped } from "react-bootstrap-icons";

type Action = "ADD" | "DELETE" | "BLOCK" | "EDIT" | "";
type Person = {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
  address: string;
  status: boolean;
};

//Tạo ra dữ liệu mẫu cho Student
const initState = {
  id: 0,
  name: "",
  dateOfBirth: "",
  email: "",
  address: "",
  status: true,
};

export const QLSV = () => {
  //tạo ra 1 state để componet render dữ liệu mẫu
  const [data, setData] = useState(initData); // data đang có dữ liệu là initData
  //tạo ra 1 state để lưu trữ sự kiện được nhấn, sẽ dùng chung cho 3 modal vì cùng kiểu
  const [action, setAction] = useState<Action>("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Person>(initState);
  const [size, setSize] = useState(1); // kích thước phần tử trên 1 trang
  const [currentPage, setCurrentPage] = useState(2); // số trang hiện tai

  const handleOpenModal = (action: Action) => {
    setIsOpen(true); //mở
    setAction(action);
  };

  const handleCloseModal = () => {
    setIsOpen(false); // đóng
    setAction("");
  };

  const handleDelete = () => {
    const newData = data.filter((stu) => stu.id != selected.id);
    setIsOpen(false);
    setData(newData);
    setAction("");
  };

  const handleBlock = () => {
    const newData = data.map((stu) => {
      if (stu.id == selected.id) {
        stu.status = !stu.status;
      }
      return stu;
    });
    setIsOpen(false);
    setData(newData);
    setAction("");
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = e.target.name;
    let value = e.target.value;
    setSelected({ ...selected, [name]: value });
    console.log(selected);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (action == "ADD") {
      const newPerson: Person = {
        ...selected,
        id: data[data.length - 1].id + 1,
        status: true,
      };
      setData([...data, newPerson]);
    } else {
      // active == "EDIT"
      const newData = data.map((stu) => {
        if (stu.id == selected.id) {
          stu = selected;
        }
        return stu;
      });
      setData(newData);
    }
    setIsOpen(false);
    setAction("");
  };

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / size);
  }, [data, size]);

  // lọc các phần tử theo page và size
  const filterData = useMemo(() => {
    const start = (currentPage - 1) * size;
    const end = currentPage * size;
    // start <= index <end
    return data.slice(start, end);
  }, [data, currentPage, size]);
  return (
    <div>
      <>
        <div className="w-[80%] m-auto mt-4 h-[100vh] outfit-uniquifier">
          <main className="main">
            <header className="d-flex justify-content-between mb-3">
              <h3>Nhân viên</h3>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleOpenModal("ADD");
                }}
              >
                Thêm mới nhân viên
              </button>
            </header>
            <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
              <input
                style={{ width: 350 }}
                type="text"
                className="form-control rounded-0"
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
                {/*render danh sách tại đây */}
                {/*nếu để {}, js sẽ hiểu là bắt đầu 1 khối lệnh
                   nếu để (), js sẽ hiểu là return trực tiếp
                   tóm lại: hoặc (), hoặc {return ()} */}

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
                          {stu.status ? "Đang hoạt động" : "Dừng hoạt động"}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`button button-${
                          stu.status ? "block" : "unblock"
                        }`}
                        onClick={() => {
                          setSelected(stu);
                          console.log(stu);
                          handleOpenModal("BLOCK");
                        }}
                      >
                        {stu.status ? "Chặn" : "Mở chặn"}
                      </span>
                    </td>
                    <td>
                      <span
                        className="button button-edit"
                        onClick={() => {
                          setSelected(stu);
                          handleOpenModal("EDIT");
                        }}
                      >
                        Sửa
                      </span>
                    </td>
                    <td>
                      <span
                        className="button button-delete"
                        onClick={() => {
                          handleOpenModal("DELETE");
                          setSelected(stu);
                        }}
                      >
                        Xóa
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <footer className="d-flex justify-content-end align-items-center gap-3">
              <select
                className="form-select"
                value={size}
                onChange={(e) => setSize(+e.target.value)}
              >
                <option selected>Hiển thị 10 bản ghi trên trang</option>
                <option>Hiển thị 20 bản ghi trên trang</option>
                <option>Hiển thị 50 bản ghi trên trang</option>
                <option>Hiển thị 100 bản ghi trên trang</option>
              </select>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage == 1 ? "disabled" : ""}`}
                >
                  <a
                    className="page-link no-focus-outline"
                    href="#"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </a>
                </li>
                {Array.from(new Array(totalPages), (_, index) => index + 1).map(
                  (page, index) => (
                    <li
                      className={`page-item ${
                        currentPage == page ? "active" : ""
                      }`}
                    >
                      <a
                        onClick={() => setCurrentPage(page)}
                        className="page-link"
                        href="#"
                      >
                        {index + 1}
                      </a>
                    </li>
                  )
                )}
                <li
                  className={`page-item ${
                    currentPage == totalPages ? "disabled" : ""
                  }`}
                >
                  <a
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="page-link"
                    href="#"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </footer>
          </main>
        </div>
        {/* Form thêm mới nhân viên */}
        <div
          className="overlay outfit-uniquifier"
          hidden={!((action == "ADD" || action == "EDIT") && isOpen)}
        >
          <form className="form" onSubmit={handleSubmitForm}>
            <div className="d-flex justify-content-between align-items-center">
              <h4>{action == "ADD" ? "Thêm mới" : "Chỉnh sửa"} nhân viên</h4>
              <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
            </div>
            <div>
              <label className="form-label" htmlFor="userName">
                Họ và tên
              </label>
              <input
                id="userName"
                type="text"
                className="form-control"
                name="name"
                value={selected.name}
                onChange={handleChangeInput}
              />
              {/* <div class="form-text error">Họ và tên không được để trống.</div> */}
            </div>
            <div>
              <label className="form-label" htmlFor="dateOfBirth">
                Ngày sinh
              </label>
              <input
                id="dateOfBirth"
                type="text"
                className="form-control"
                name="dateOfBirth"
                value={selected.dateOfBirth}
                onChange={handleChangeInput}
              />
            </div>
            {/* <div class="form-text error">
    Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
            <div>
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="form-control"
                name="email"
                value={selected.email}
                onChange={handleChangeInput}
              />
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
                name="address"
                value={selected.address}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <button className="w-100 btn btn-primary">
                {action == "ADD" ? "Thêm mới" : "Cập nhật"}
              </button>
            </div>
          </form>
        </div>
        {/* Modal xác nhận chặn tài khoản */}
        <div className="overlay" hidden={!(action == "BLOCK" && isOpen)}>
          <div className="modal-custom">
            <div className="modal-title">
              <h4>Cảnh báo</h4>
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  handleCloseModal();
                }}
              />
            </div>
            <div className="modal-body-custom">
              <span>
                Bạn có chắc chắn muốn {selected.status ? "mở chặn" : "chặn"} tài
                khoản này?
              </span>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-light" onClick={handleCloseModal}>
                Hủy
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  handleBlock();
                  console.log(selected);
                }}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
        {/* Modal xác nhận xóa tài khoản */}
        <div className="overlay" hidden={!(action == "DELETE" && isOpen)}>
          <div className="modal-custom">
            <div className="modal-title">
              <h4>Cảnh báo</h4>
              <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
            </div>
            <div className="modal-body-custom">
              <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
            </div>
            <div className="modal-footer-custom">
              <button className="btn btn-light" onClick={handleCloseModal}>
                Hủy
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
