// 함께한 사람들
import CreditTable from '../components/CreditTable';

export default function Section10() {
  return {
    title: "함께한 사람들",
    content: (
      <div className="section-content">
        <div className="credits">
          <CreditTable />
        </div>
      </div>
    )
  };
} 