// 함께한 사람들
import CreditTable from '../components/CreditTable';
import StaffImageGrid from '../components/StaffImageGrid';

export default function Section10() {
  return {
    title: "함께한 사람들",
    content: (
      <div className="section-content">
        <div className="credits">
          <CreditTable />
        </div>
        
        <hr style={{ 
          margin: '2rem 0',
          border: 'none',
          borderBottom: '1px solid #8B4513'
        }} />
        
        <div className="staff-photos">
          <StaffImageGrid /> 
        </div>
      </div>
    )
  };
} 