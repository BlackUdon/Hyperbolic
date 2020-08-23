import React, {useCallback, useEffect, ReactNode, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {createConnection, getRepository, Connection} from 'typeorm/browser';

import {Author} from './author';
import {Category} from './category';
import {Post} from './post';

const AuthorTile = ({name, birthdate}: {name: string; birthdate: string}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{birthdate}</Text>
    </View>
  );
};

const TestDB = () => {
  console.log(`Connection Start`);
  const [defaultConnection, setConnection] = useState<Connection | null>(null);
  const [authors, setAuthors] = useState<Author[]>([]);
  const setupConnection = useCallback(async () => {
    try {
      const connection = await createConnection({
        type: 'react-native',
        database: 'test',
        location: 'default',
        logging: ['error', 'query', 'schema'],
        synchronize: true,
        entities: [Author, Category, Post],
      });
      setConnection(connection);
      getAuthors();
    } catch (error) {
      console.log(`Error in TestDB ${error}`);
      console.log('Getting data instead');
      getAuthors();
    }
  }, []);

  const getAuthors = useCallback(async () => {
    const authorRepository = getRepository(Author);
    let result = await authorRepository.find();
    if (result.length === 0) {
      const newAuthor = new Author();
      newAuthor.birthdate = '10-03-1940';
      newAuthor.name = 'Chuck Norris';
      await authorRepository.save(newAuthor);
      result = await authorRepository.find();
    }
    setAuthors(result);
  }, []);

  useEffect(() => {
    if (!defaultConnection) {
      setupConnection();
    } else {
      getAuthors();
    }
  }, []);

  return authors;
};

export default TestDB;
