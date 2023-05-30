// 글쓰기 주제를 1초마다 변경하는 함수
function changeTopic() {
    const topics = ["오늘 점심 추천", "커피 추천"]; // 변경될 주제들
    let currentTopicIndex = 0;
    const topicElement = document.getElementById("topic");
  
    setInterval(() => {
      currentTopicIndex = (currentTopicIndex + 1) % topics.length;
      topicElement.textContent = topics[currentTopicIndex];
    }, 1000);
  }
  
  // 글 작성 폼 제출 시 처리하는 함수
  function submitForm(event) {
    event.preventDefault(); // 폼 제출 시 페이지 이동 방지
  
    const foodType = document.getElementById("food-type").value;
    const reason = document.getElementById("reason").value;
    const currentDate = new Date().toLocaleString();
    const postElement = document.createElement("div");
  
    postElement.innerHTML = `
      <p>${foodType}을(를) 추천합니다.</p>
      <p>이유: ${reason}</p>
      <p>글쓴이: <span class="author">홍길동</span></p>
      <p>작성 시간: ${currentDate}</p>
      <button class="edit">수정</button>
      <button class="delete">삭제</button>
    `;
  
    document.getElementById("posts").appendChild(postElement);
  
    // 작성된 글에 수정 및 삭제 기능 추가
    const editButton = postElement.querySelector(".edit");
    const deleteButton = postElement.querySelector(".delete");
  
    editButton.addEventListener("click", () => {
      // 수정 기능 구현
    });
  
    deleteButton.addEventListener("click", () => {
      postElement.remove();
    });
  
    // 폼 초기화
    document.getElementById("food-type").value = "한식";
    document.getElementById("reason").value = "";
  }
  
  // 화면이 로드되면 실행되는 함수
  window.addEventListener("load", () => {
    changeTopic(); // 글쓰기 주제 변경
  
    // 글 작성 폼 제출 이벤트 처리
    const recommendationForm = document.getElementById("recommendation-form");
    recommendationForm.addEventListener("submit", submitForm);
  
    // 확인 버튼 클릭 시 작업 수행 (여기서는 alert 메시지 출력)
    const confirmButton = document.getElementById("confirm");
    confirmButton.addEventListener("click", () => {
      alert("확인 버튼을 클릭했습니다.");
    });
  });
  