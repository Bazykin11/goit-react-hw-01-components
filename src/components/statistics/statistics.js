import { 
  StatTitle,
  StatSection, 
  StatList, 
  StatItem, 
  StatSpan } from "./statistics.styled"
import { PropTypes } from 'prop-types';


export const Statistics = ({title, stats}) => {
    return  <StatSection >
                  {title && <StatTitle>{title}</StatTitle>}
                  <StatList >
                {stats.map(stat =>(
                  <StatItem type={stat.label} key={stat.id}>
                    <StatSpan>{stat.label} </StatSpan>
                    <StatSpan>{stat.percentage}</StatSpan>
                  </StatItem>
                                  ) )}
                </StatList>
            </StatSection>
}


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
}


