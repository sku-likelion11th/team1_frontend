$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "yyyy-mm", // 데이터 포맷 형식(yyyy: 년 mm: 월)
    startView: "months", // 뷰 모드를 월로 설정
    minViewMode: "months", // 최소 뷰 모드를 월로 설정
    startDate: "2023-01", // 2023년 이후의 날짜만 선택 가능
    endDate: "2023-12", // 2023년까지의 날짜만 선택 가능
    autoclose: true, // 사용자가 날짜를 선택하면 자동으로 달력을 닫음
    language: "ko", // 달력 언어 설정
  });
});
