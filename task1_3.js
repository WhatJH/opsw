function validateForm(){
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;

  if(name == ""){
    alert("Name is required");
    return false;
  }
  if(age == ""){
    alert("Age is required");
    return false;
  }
  else if(age <= 1){
    alert("Proper age is required");
    return false;
  }
  if(address == ""){
    alert("Address is required");
    return false;
  }
  if(email == ""){
    alert("Email is required");
  }
  else if(!email.includes("@")){
    alert("Invalid email address");
    return false;
  }

  return true;
}

function showData(){
  var peopleList;
  if(localStorage.getItem("peopleList")==null){
    peopleList=[];
  }
  else{
    peopleList=JSON.parse(localStorage.getItem("peopleList"));
  }
  var html="";

  peopleList.forEach(function(element,index){
    html += "<tr>";
    html += "<td>"+ element.name + "</td>";
    html += "<td>"+ element.age + "</td>";
    html += "<td>"+ element.address + "</td>";
    html += "<td>"+ element.email + "</td>";
    html +=
  '<td><button onclick="deleteData(' +
  index +
  ')" class="btn btn-danger">Delete</button>' + 
  '<button onclick="updateData(' +
  index +
  ')" class="btn btn-warning m-2">Edit</button></td>';
html += "</tr>";
});
  document.querySelector("#crudTable tbody").innerHTML=
   html;
  }

  window.onload = showData;


  function AddData(){
    if (validateForm() == true){
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var address = document.getElementById("address").value;
      var email = document.getElementById("email").value;
    
    var peopleList;
    if(localStorage.getItem("peopleList") == null) {
      peopleList=[];
    } else {
      peopleList=JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.push({
      name: name,
      age: age,
      address: address,
      email: email,
      commets:[]

  });

  localStorage.setItem("peopleList",JSON.stringify
  (peopleList));
  showData();
  document.getElementById("name").value ="";
  document.getElementById("age").value ="";
  document.getElementById("address").value="";
  document.getElementById("email").value="";
 }
}
function deleteData(index){
  var peopleList;
    if(localStorage.getItem("peopleList")==null){
      peopleList=[];
    }
    else{
      peopleList=JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index,1);
    localStorage.setItem("peopleList",JSON.stringify
    (peopleList));
    showData();
  }


function updateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("age").value = peopleList[index].age;
  document.getElementById("address").value = peopleList[index].address;
  document.getElementById("email").value = peopleList[index].email;

  document.querySelector("#Update").onclick = function() {
    if (validateForm() == true) {
      peopleList[index].name = document.getElementById("name").value;
      peopleList[index].age = document.getElementById("age").value;
      peopleList[index].address = document.getElementById("address").value;
      peopleList[index].email = document.getElementById("email").value;

      localStorage.setItem("peopleList", JSON.stringify(peopleList));

      showData();

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("address").value = "";
      document.getElementById("email").value = "";

      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }};}
    var comments = [];

 function addComment() {
      var commentText = document.getElementById("comment").value;
      if (commentText.trim() === "") {
        alert("댓글을 입력해주세요.");
        return;
      }
    
      var newComment = {
        id: comments.length + 1,
        text: commentText,
        isEditing: false
      };
    
      comments.push(newComment);
      renderComments();
      document.getElementById("comment").value = "";
    }
    
    function deleteComment(id) {
      var commentIndex = comments.findIndex(function(comment) {
        return comment.id === id;
      });
    
      if (commentIndex !== -1) {
        comments.splice(commentIndex, 1);
        renderComments();
      }
    }
    
function saveComment(id) {
      var commentIndex = comments.findIndex(function(comment) {
        return comment.id === id;
      });
    
      if (commentIndex !== -1) {
        var newText = document.getElementById("commentText_" + id).value;
        if (newText.trim() === "") {
          alert("댓글을 입력해주세요.");
          return;
        }
        comments[commentIndex].text = newText;
        comments[commentIndex].isEditing = false;
        renderComments();
      }
    }
    
    function cancelEdit(id) {
      var commentIndex = comments.findIndex(function(comment) {
        return comment.id === id;
      });
    
      if (commentIndex !== -1) {
        comments[commentIndex].isEditing = false;
        renderComments();
      }
    }
    var comments = [];

    function addComment() {
      var commentText = document.getElementById("comment").value;
      if (commentText.trim() === "") {
        alert("댓글을 입력해주세요.");
        return;
      }
    
      var newComment = {
        id: comments.length + 1,
        text: commentText,
        isEditing: false
      };
    
      comments.push(newComment);
      renderComments();
      document.getElementById("comment").value = "";
    }
    
    function deleteComment(id) {
      var commentIndex = comments.findIndex(function(comment) {
        return comment.id === id;
      });
    
      if (commentIndex !== -1) {
        comments.splice(commentIndex, 1);
        renderComments();
      }
    }
    
    function editComment(id) {
      var commentIndex = comments.findIndex(function(comment) {
        return comment.id === id;
      });
    
      if (commentIndex !== -1) {
        comments[commentIndex].isEditing = true;
        renderComments();
      }
    }
    
    function saveComment(id) {
      var commentIndex = comments.findIndex(function(comment) {
        return comment.id === id;
      });
    
      if (commentIndex !== -1) {
        var newText = document.getElementById("commentText_" + id).value;
        if (newText.trim() === "") {
          alert("댓글을 입력해주세요.");
          return;
        }
        comments[commentIndex].text = newText;
        comments[commentIndex].isEditing = false;
        renderComments();
      }
    }
    
    function cancelEdit(id) {
      var commentIndex = comments.findIndex(function(comment) {
        return comment.id === id;
      });
    
      if (commentIndex !== -1) {
        comments[commentIndex].isEditing = false;
        renderComments();
      }
    }
    
    function renderComments() {
      var commentSection = document.getElementById("commentSection");
      commentSection.innerHTML = "";
    
      comments.forEach(function(comment) {
        var commentElement = document.createElement("div");
        commentElement.className = "comment";
    
        if (comment.isEditing) {
          var commentInput = document.createElement("textarea");
          commentInput.id = "commentText_" + comment.id;
          commentInput.value = comment.text;
    
          var saveButton = document.createElement("button");
          saveButton.className = "btn btn-primary btn-sm";
          saveButton.textContent = "저장";
          saveButton.onclick = function() {
            saveComment(comment.id);
          };
    
          var cancelButton = document.createElement("button");
          cancelButton.className = "btn btn-secondary btn-sm";
          cancelButton.textContent = "취소";
          cancelButton.onclick = function() {
            cancelEdit(comment.id);
          };
    
          commentElement.appendChild(commentInput);
          commentElement.appendChild(saveButton);
          commentElement.appendChild(cancelButton);
        } else {
          var commentText = document.createElement("p");
          commentText.textContent = comment.text;
          commentText.id = "commentText_" + comment.id;
    
          var editButton = document.createElement("button");
          editButton.className = "btn btn-info btn-sm";
          editButton.textContent = "수정";
          editButton.onclick = function() {
            editComment(comment.id);
          };
    
          var deleteButton = document.createElement("button");
          deleteButton.className = "btn btn-danger btn-sm";
          deleteButton.textContent = "삭제";
          deleteButton.onclick = function() {
            deleteComment(comment.id);
          };
    
          commentElement.appendChild(commentText);
          commentElement.appendChild(editButton);
          commentElement.appendChild(deleteButton);
        }
    
        commentSection.appendChild(commentElement);
      });
    }
    
    function searchTable() {
      // 검색어 가져오기
      var searchText = document.getElementById("search").value.toLowerCase();
    
      // 테이블 행 가져오기
      var table = document.getElementById("crudTable");
      var rows = table.getElementsByTagName("tr");
    
      // 테이블 행 반복
      for (var i = 1; i < rows.length; i++) { // i=0은 테이블의 헤더이므로 제외
        var nameColumn = rows[i].getElementsByTagName("td")[0]; // 이름 열 가져오기
        var name = nameColumn.textContent.toLowerCase(); // 이름 열의 텍스트 가져오기
    
        // 이름에 검색어가 포함되어 있는지 확인
        if (name.indexOf(searchText) > -1) {
          rows[i].style.display = ""; // 행 보이기
        } else {
          rows[i].style.display = "none"; // 행 숨기기
        }
      }
    }
    
    // 검색 버튼 클릭 시 검색 기능 실행
    document.getElementById("searchBtn").addEventListener("click", searchTable);
    

