// For stylish components
import styled from 'styled-components';

// List
export const StatList = styled.ul`
  max-width: 250px;
`;

// Item
export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

// Badge
export const Badge = styled.span`
  color: #fff;
  background-color: #007bff;
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
  line-height: 1;
`;