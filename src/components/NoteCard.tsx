import { Card, CardBody, CardHeader } from '@chakra-ui/react';
interface Props {
  title: string;
  body: string;
}
function NoteCard({ title, body }: Props) {
  return (
    <Card padding={2} margin={2}>
      <CardHeader>{title}</CardHeader>
      <CardBody>{body}</CardBody>
    </Card>
  );
}

export default NoteCard;
