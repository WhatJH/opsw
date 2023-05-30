
  // 방명록 작성 폼의 submit 이벤트 핸들러
  document.getElementById("guestbook-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼의 기본 동작인 페이지 새로고침을 방지합니다.
    
    // 작성자와 메시지 내용 가져오기
    const author = document.getElementById("guestbook-author").value;
    const message = document.getElementById("guestbook-message").value;

    // 작성된 방명록 게시물을 HTML로 생성합니다.
    const postElement = document.createElement("div");
    postElement.innerHTML = `<p><strong>${author}:</strong> ${message}</p>`;

    // 방명록 게시물을 추가합니다.
    const guestbookPostsElement = document.getElementById("guestbook-posts");
    guestbookPostsElement.appendChild(postElement);

    // 작성 후 입력 필드 초기화
    document.getElementById("guestbook-author").value = "";
    document.getElementById("guestbook-message").value = "";
  });

