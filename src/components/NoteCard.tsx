import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
interface Props {
  title: string;
  body: string;
}
function NoteCard({ title, body }: Props) {
  return (
    <Card padding={2} margin={2}>
      <CardHeader>
        <Heading fontSize='2xl'>{title}</Heading>
      </CardHeader>
      <CardBody>{body}</CardBody>
    </Card>
  );
}

export default NoteCard;
