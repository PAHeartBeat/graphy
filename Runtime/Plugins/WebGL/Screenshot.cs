// unset:silent

using System.Runtime.InteropServices;

using UnityEngine.Scripting;

namespace iPAHeartBeat.WebGL.NativeLib {
	public static class Screenshot {
#if UNITY_WEBGL
		[Preserve]
		[DllImport("__Internal")]
		private static extern void downloadImageJS(byte[] data, long length, string fileName);

		public static void DownloadImageJS(byte[] data, string fileName) =>
			downloadImageJS(data, data?.Length ?? 0, fileName);
#endif
	}
}
