import { Card, CardBody, CardHeader } from '@chakra-ui/react';

function NoteCard() {
  return (
    <Card padding={2} margin={2}>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
    </Card>
  );
}

export default NoteCard;
