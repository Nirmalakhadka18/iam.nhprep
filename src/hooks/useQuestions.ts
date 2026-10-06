import { useQuery } from '@tanstack/react-query';
import { questions } from '../data/questions';
import type { Question } from '../types/question';

// In a real app, this would fetch from an API.
// Here we simulate an API call that returns the local static data.
const fetchQuestions = async (): Promise<Question[]> => {
  return questions;
};

export const useQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestions,
    staleTime: Infinity, // The data is static, so it never becomes stale
  });
};
