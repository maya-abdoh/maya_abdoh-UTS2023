import React, { useState } from "react";
import "./StartPage.css";
import { Carousel } from 'primereact/carousel';

function StartPage(props) {
  const { theme, onThemeChange } = props;
  const [startClicked, setStartClicked] = useState(false);

  const handleStartClick = (contestType) => {
    setStartClicked(true);
    props.onStartClick(contestType);
  };

  // Sample data for the contests
  const contests = [
    {
      title: "المسابقة الورقية",
      description: "هل أنتم مستعدون لاختبار معارفكم وتحدي ذكائكم؟ انضموا إلينا في مسابقة ممتعة ومثيرة تتيح لكم فرصة الفوز بجوائز قيمة! ستتاح لكم فرصة اختبار",
      contestType: "paperGroup"
    },
    {
      title: "من سيربح المليون",
      description: "انضم إلى مسابقتنا 'من سيربح المليون' واحصل على فرصة للفوز بجائزة قد تصل إلى المليون، سيتم تقديم الأسئلة بشكل ممتع، وستتاح لك الفرصة للتألق وإظهار معرفتك",
      contestType: "whosTheMillioner"
    },
    {
      title: "فاميلي فيود",
      description: "هل أنتم مستعدون للاستمتاع بمسابقة 'فاميلي فيود' الممتعة؟ اختبر معارفك وتوقع إجابات الجمهور في هذه المسابقة الشيقة. ستتحدى فيها أفراد عائلتين للفوز بالنقاط والمرح.",
      contestType: "familyFeud"
    }
  ];

  if (startClicked) {
    return null;
  }

  return (
    <div className={theme}>
      <button className="theme" onClick={onThemeChange}>
        تغيير الخلفية
      </button>
      <div className="container">
      <Carousel value={contests} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="500px" itemTemplate={renderContestCard} />
      </div>
    </div>
  );

  function renderContestCard(contest) {
    return (
      <div className="card">
        <b>{contest.title}</b>
        <p>{contest.description}</p>
        <button className="start" onClick={() => handleStartClick(contest.contestType)}>
          ابدأ
        </button>
      </div>
    );
  }
}

export default StartPage;
