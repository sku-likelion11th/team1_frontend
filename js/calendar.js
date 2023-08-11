$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "yyyy-mm", //데이터 포맷 형식(yyyy : 년 mm : 월)
    startDate: "-1m", //달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
    endDate: "+1m", //달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
    ChangeYear: false,
    autoclose: true, //사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
    clearBtn: false, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
    disableTouchKeyboard: false, //모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
    showWeekDays: true, // 위에 요일 보여주는 옵션 기본값 : true
    todayHighlight: true, //오늘 날짜에 하이라이팅 기능 기본값 :false
    toggleActive: true, //이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
    language: "ko", //달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
  });
});
