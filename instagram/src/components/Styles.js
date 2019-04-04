import styled from 'styled-components';

// =========================
//     App Styles
// =========================

export const AppDiv = styled.div`
  text-align: center;
  background-color:  #A77464;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// ==========================
//     Login Styles
// ==========================

export const LoginWrapper = styled.div`
  height: 100vh;
`;

export const LoginContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 550px;
  height: 500px;
  margin: 0 auto;
  top: 40px;
  padding-top: 20px;
  background-color: #A2A79E;
  border-radius: 20% 20% 40% 40%;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin-top: 10px;
  h1 {
  font-family: 'Pacifico', cursive;
  font-size: 3.5rem;
  }
  input {
    margin: 30px 0;
    padding: 8px 20px 12px 20px;
    border-top: none;
    border-left: none;
    border-radius: 10% 10% 40% 40%;
    box-shadow: 6px 8px gray;
    &:focus {
    outline: none;
    }
  }
  button {
    margin-top: 40px;
    padding: 5px 30px;
    background-color: #A27E8E;
    border-top: none;
    border-left: none;
    border-radius: 10% 10% 40% 40%;
    box-shadow: 4px 6px gray;
    &:focus {
    outline: none;
    }
  }
`;

// ======================
//     Search Bar
// ======================

export const NavBar = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin: 0 20px 30px 20px;
  border: 2px solid #88292F;
  border-radius: 5px;
  .form-inline input:focus {
    outline: none;
  }
  .nav-left {
    display: flex;
    padding-top: 1%;
    p {
      font-family: 'Pacifico', cursive;
      font-size: 1.8rem;
      margin-left: 20px;
      padding-left: 20px;
      border-left: 1px solid #88292F;
    }
    i {
      font-size: 2.8rem;
    }
  }

  .nav-right {
    i {
      margin-right: 20px;
      font-size: 2.5rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

// =======================
//    Post Header Styles
// =======================

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;

  .thumb-img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 20px 20px;
  }

  .header-text {
    margin-top: 12px;
    font-weight: 600px;
  }
`;

// =========================
//   Post Container Styles
// =========================

export const PostWrapperDiv = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;

  .main-img {
    width: 100%;
  }
`;

export const PostDiv = styled.div`
  border: 2px solid #88292F;
  background: #a2a79e;
  border-radius: 5px;
  box-shadow: 5px 10px 30px;
  margin-bottom: 40px;
`;

export const LikesDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 20px;
  
  i {
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

// ===========================
//    Comment Section Styles
// ===========================

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;

  .comment-form {
    margin-top: 20px;
    width: 100%;
  }

  .form-control {
    background-color: #88292F;
    border: none;
    height: 45px;
  }

  &::placeholder {
  color: white;
  }

  .comment-input {
    &:focus {
      outline: none;
      color: #88292F;
      background: white;
    }
  }
`;

// ======================
//    Cpmment Styles
// ======================

export const CommentDiv = styled.div`
  margin-left: 20px;

  .comment-text {
    margin-bottom: 0;
  }
`;