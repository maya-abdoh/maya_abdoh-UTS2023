import React, { useState } from "react";
import "./StartPage.css";

function StartPage(props) {
  const { theme, onThemeChange } = props;
  const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = (contestType) => {
    setStartClicked(true);
    props.onStartClick(contestType);
  };

  if (startClicked) {
    return null;
  }

  return (
    <div className={theme}>
      <button className="theme" onClick={onThemeChange}>
        Change Theme
      </button>
      <div className="container">
        <div className="card">
          <b>المسابقة الورقية</b>
          <p>
            هل أنتم مستعدون لاختبار معارفكم وتحدي ذكائكم؟ انضموا إلينا في مسابقة
            ممتعة ومثيرة تتيح لكم فرصة الفوز بجوائز قيمة! ستتاح لكم فرصة اختبار
            معلوماتكم حول التاريخ الوطني والثقافة الدينية لبلدنا الحبيب
          </p>
          <button className="start" onClick={() => handleStartClick("paperGroup")}>
            ابدأ
          </button>
        </div>
        <div className="card second">
          <b>من سيربح المليون</b>
          <p>
            انضم إلى مسابقتنا "من سيربح المليون" واحصل على فرصة للفوز بجائزة مغرية قد تصل
            إلى المليون، سيتم تقديم الأسئلة بشكل ممتع ومشوق، وستتاح لك الفرصة للتألق
            وإظهار معرفتك
          </p>
          <button className="start" onClick={() => handleStartClick("whosTheMillioner")}>
            ابدأ
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
