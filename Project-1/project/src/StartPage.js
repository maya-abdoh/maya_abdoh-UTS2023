import React from "react";
import "./StartPage.css";

export default class StartPage extends React.Component {

  render() {
    return (
      <div className="card">
         <b>شارك الآن</b>
         <p> هل أنتم مستعدون لاختبار معارفكم وتحدي ذكائكم؟ انضموا إلينا في مسابقة ممتعة ومثيرة تتيح لكم فرصة الفوز بجوائز قيمة! ستتاح لكم فرصة اختبار معلوماتكم حول التاريخ الوطني والثقافة الدينية لبلدنا الحبيب
         </p>
         <button className="start">ابدأ</button>
        </div>
    );
  }
}
