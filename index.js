
      $(document).ready(function () {
        $("#password1").keyup(function () {
          if (checkpassword1()) {
            $("#pwdtext1").html(
              "<font color='green'>Password Validated</font>"
            );
          } else {
            $("#pwdtext1").html(
              "<font color='red'>Enter Valid Password</font>"
            );
          }
        });
        $("#password2").keyup(function () {
          if (checkpassword2()) {
            $("#pwdtext2").html(
              "<font color='green'>Password Validated</font>"
            );
          } else {
            $("#pwdtext2").html(
              "<font color='red'>Enter Valid Password</font>"
            );
          }
        });
        $("#email1").keyup(function () {
          if (checkemail1()) {
            $("#emailtext1").html(
              "<font color='green'>Email Id Validated</font>"
            );
          } else {
            $("#emailtext1").html(
              "<font color='red'>Enter Valid Email Id</font>"
            );
          }
        });
        $("#email2").keyup(function () {
          if (checkemail2()) {
            $("#emailtext2").html(
              "<font color='green'>Email Id Validated</font>"
            );
          } else {
            $("#emailtext2").html(
              "<font color='red'>Enter Valid Email Id</font>"
            );
          }
        });
        $("#fullname").keyup(function () {
          if (checkname()) {
            $("#fullnme").html("<font color='green'>Name Validated</font>");
          } else {
            $("#fullnme").html("<font color='red'>Enter Valid Name</font>");
          }
        });
        $("#contact").keyup(function () {
          if (checkcontact()) {
            $("#contacttext").html(
              "<font color='green'>Contact Number Validated</font>"
            );
          } else {
            $("#contacttext").html(
              "<font color='red'>Enter Valid Contact Number</font>"
            );
          }
        });
      });

      function checkpassword1() {
        let pwd = $("#password1").val();
        let pwdExp =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (pwdExp.test(pwd)) {
          return true;
        } else {
          return false;
        }
      }

      function checkpassword2() {
        let pwd = $("#password2").val();
        let pwdExp =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (pwdExp.test(pwd)) {
          return true;
        } else {
          return false;
        }
      }

      function checkemail1() {
        let email = $("#email1").val();
        let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailExp.test(email)) {
          return true;
        } else {
          return false;
        }
      }

      function checkemail2() {
        let email = $("#email2").val();
        let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailExp.test(email)) {
          return true;
        } else {
          return false;
        }
      }

      function checkname() {
        let name = $("#fullname").val();
        let nameExp = /^[a-zA-Z\s]+$/;
        if (nameExp.test(name)) {
          return true;
        } else {
          return false;
        }
      }

      function checkcontact() {
        let contact = $("#contact").val();
        let contactExp = /^\d{10}$/;
        if (contactExp.test(contact)) {
          return true;
        } else {
          return false;
        }
      }
