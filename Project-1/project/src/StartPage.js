import React, { useState } from "react";
import "./StartPage.css";

function StartPage(props) {
  const { theme, onThemeChange } = props;
  const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = () => {
    setStartClicked(true);
    props.onStartClick();
  };

  if (startClicked) {
    return null;
  }

  return (
    <div className={theme}>
      <button className="theme" onClick={onThemeChange}>Change Theme</button>
      <div className="card">
        <b>شارك الآن</b>
        <p>
          هل أنتم مستعدون لاختبار معارفكم وتحدي ذكائكم؟ انضموا إلينا في مسابقة
          ممتعة ومثيرة تتيح لكم فرصة الفوز بجوائز قيمة! ستتاح لكم فرصة اختبار
          معلوماتكم حول التاريخ الوطني والثقافة الدينية لبلدنا الحبيب
        </p>
        <button className="start" onClick={handleStartClick}>
          ابدأ
        </button>
      </div>
    </div>
  );
}

export default StartPage;