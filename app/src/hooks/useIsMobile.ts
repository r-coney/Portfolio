import { useState, useEffect } from 'react';

/**
 * useIsMobile: モバイルデバイスであるかを検出するカスタムフック。
 * @param breakpoint モバイルデバイスとして見なすウィンドウ幅の閾値（ピクセル）。デフォルトは 768 ピクセル。
 * @returns 現在のデバイスがモバイルである場合は true、それ以外の場合は false を返す。
 */
const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // ウィンドウの幅が指定されたブレークポイント以下かどうかを確認する関数
    const checkIsMobile = () => setIsMobile(window.innerWidth <= breakpoint);

    // コンポーネントがマウントされたときに初回チェックを実行する
    checkIsMobile();

    // ウィンドウのリサイズイベントを監視し、モバイル判定を更新する
    window.addEventListener('resize', checkIsMobile);

    // クリーンアップ関数：コンポーネントがアンマウントされるときにイベントリスナーを削除する
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]); // breakpoint の値が変更されたときに useEffect を再実行する

  return isMobile;
};

export default useIsMobile;
