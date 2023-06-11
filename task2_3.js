var comments = [];

// 새로운 댓글 추가
function addComment() {
  var author = document.getElementById("author").value;
  var commentText = document.getElementById("comment").value;

  if (author.trim() === "" && commentText.trim() === "") {
    alert("빈칸을 모두 입력해주세요.");
    return;
  }

  if (author.trim() === "") {
    alert("닉네임을 입력해주세요.");
    return;
  }

  if (commentText.trim() === "") {
    alert("내용을 입력해주세요.");
    return;
  }

  var newComment = {
    id: comments.length + 1,
    author: author,
    text: commentText,
    isEditing: false
  };

  comments.push(newComment);
  saveComments(); // 댓글 저장
  renderComments();
  document.getElementById("author").value = "";
  document.getElementById("comment").value = "";
}

// 댓글 삭제
function deleteComment(id) {
  var commentIndex = comments.findIndex(function (comment) {
    return comment.id === id;
  });

  if (commentIndex !== -1) {
    comments.splice(commentIndex, 1);
    saveComments(); // 댓글 저장
    renderComments();
  }
}

// 댓글 수정
function editComment(id) {
  var commentIndex = comments.findIndex(function (comment) {
    return comment.id === id;
  });

  if (commentIndex !== -1) {
    comments[commentIndex].isEditing = true;
    renderComments();
  }
}

// 수정된 댓글 저장
function saveComment(id) {
  var commentIndex = comments.findIndex(function (comment) {
    return comment.id === id;
  });

  if (commentIndex !== -1) {
    var newText = document.getElementById("commentText_" + id).value;
    if (newText.trim() === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    comments[commentIndex].text = newText;
    comments[commentIndex].isEditing = false;
    saveComments(); // 댓글 저장
    renderComments();
  }
}

// 수정 취소
function cancelEdit(id) {
  var commentIndex = comments.findIndex(function (comment) {
    return comment.id === id;
  });

  if (commentIndex !== -1) {
    comments[commentIndex].isEditing = false;
    renderComments();
  }
}

// 댓글 저장
function saveComments() {
  localStorage.setItem("comments", JSON.stringify(comments)); // 댓글을 JSON 문자열로 변환하여 저장
}

// 저장된 댓글 불러오기
function loadComments() {
  var storedComments = localStorage.getItem("comments");
  if (storedComments) {
    comments = JSON.parse(storedComments); // JSON 문자열을 파싱하여 댓글 배열로 변환
  }
}

// 댓글 렌더링
function renderComments() {
  var commentSection = document.getElementById("commentSection");
  commentSection.innerHTML = "";

  comments.forEach(function (comment) {
    var commentElement = document.createElement("div");
    commentElement.className = "comment";

    var authorText = document.createElement("p");
    if (comment.author.trim() === "") {
      authorText.textContent = "닉네임을 쓰지 않았을 때 기본값";
    } else {
      authorText.textContent = "닉네임: " + comment.author;
    }

    if (comment.isEditing) {
      var commentInput = document.createElement("textarea");
      commentInput.id = "commentText_" + comment.id;
      commentInput.value = comment.text;

      var saveButton = document.createElement("button");
      saveButton.className = "btn btn-primary btn-sm";
      saveButton.textContent = "저장";
      saveButton.onclick = function () {
        saveComment(comment.id);
      };

      var cancelButton = document.createElement("button");
      cancelButton.className = "btn btn-secondary btn-sm";
      cancelButton.textContent = "취소";
      cancelButton.onclick = function () {
        cancelEdit(comment.id);
      };

      commentElement.appendChild(authorText);
      commentElement.appendChild(commentInput);
      commentElement.appendChild(saveButton);
      commentElement.appendChild(cancelButton);
    } else {
      var commentText = document.createElement("p");
      if (comment.text.trim() === "") {
        commentText.textContent = "내용을 쓰지 않았을 때 기본값";
      } else {
        commentText.textContent = comment.text;
      }
      commentText.id = "commentText_" + comment.id;

      var editButton = document.createElement("button");
      editButton.className = "btn btn-info btn-sm";
      editButton.textContent = "수정";
      editButton.onclick = function () {
        editComment(comment.id);
      };

      var deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-danger btn-sm";
      deleteButton.textContent = "삭제";
      deleteButton.onclick = function () {
        deleteComment(comment.id);
      };

      commentElement.appendChild(authorText);
      commentElement.appendChild(commentText);
      commentElement.appendChild(editButton);
      commentElement.appendChild(deleteButton);
    }

    commentSection.appendChild(commentElement);
  });
}

// 페이지 로드 시 저장된 댓글 불러오기
loadComments();
renderComments();
