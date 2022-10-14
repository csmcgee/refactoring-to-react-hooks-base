import fetch from "jest-fetch-mock";
import useFetch from './useFetch';
import { renderHook } from '@testing-library/react-hooks'

fetch.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("useFetch(url)", () => {
  it('returns default/initial state when no url is provided', () => {
    // assemble
    const initialState = {
      data: null,
      isLoading: true,
      error: false
    };

    // act
    const {result} = renderHook(() => useFetch());

    expect(result.current).toEqual(initialState);
  })

  it('successful fetch and sets state.data when response is received', async () => {
    // assemble
    const data = { 'message': 'Hello World!' };
    fetch.mockOnce(JSON.stringify(data));

    // act
    const {result, waitForNextUpdate} = renderHook(() => useFetch('/api/test'));

    // assert
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.data).toEqual(data);
    expect(result.current.isLoading).toBe(false);
  });

  it('failed fetch sets state.error', async () => {
    // assemble
    const error = new Error("Server Error");
    fetch.mockRejectOnce(error);

    // act
    const {result, waitForNextUpdate} = renderHook(() => useFetch('/api/test'));

    // assert
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.error).toEqual(error);
    expect(result.current.isLoading).toBe(false);
  });
})
